import { ErrorResponseData, EstablishmentData, ProductData, PublicationData, type UserData } from "@/data/models"
import { EstablishmentsRepository } from "@/data/repository/impl/EstablishmentsRepository"
import { ProductsRepository } from "@/data/repository/impl/ProductsRepository"
import { PublicationsRepository } from "@/data/repository/impl/PublicationsRepository"
import { storage } from "@/infrastructure/plugins/firebase"
import router, { ROUTES } from "@/infrastructure/router"
import { getDownloadURL, ref as refFirebase, uploadBytes } from "firebase/storage"
import { v4 as uuidv4 } from 'uuid'
import { onMounted, ref, type Ref } from "vue"
import { useI18n } from "vue-i18n"
import { useTheme } from "vuetify"

export function init() {
    const { t } = useI18n()
    const theme = useTheme()
    const user = JSON.parse(localStorage.getItem('user')!) as UserData
    const establishments = ref()
    const img = ref<File | null>(null)
    const imgUrl = ref<string | null>(null)
    const products = ref<{ name: string; score: number; price: number }[]>([])

    onMounted(async () => {
        const res = await new EstablishmentsRepository().getAll()
        if (res !== undefined && !(res instanceof ErrorResponseData))
            establishments.value = res.map(
                (item) =>
                    new EstablishmentData(
                        item.id,
                        item.creationDate,
                        item.isOpen,
                        item.score,
                        item.name,
                        item.location
                    )
            )
        else
            establishments.value = res
    })

    return { t, theme, user, establishments, img, imgUrl, products }
}

async function uploadPhoto(file: File) {
    const photoRef = refFirebase(storage, file.name)
    await uploadBytes(photoRef, file, { contentType: 'image/jpeg' })
    return await getDownloadURL(photoRef)
}

export async function handleCreate(isLoading: Ref<boolean, boolean>, products: any, establishment: EstablishmentData, user: UserData, totalPrice: string, totalScore: string, imgFile: File) {
    isLoading.value = true
    try {
        const img = await uploadPhoto(imgFile)
        console.log(img)
        const publication = new PublicationData(
            uuidv4().toString(),
            new Date().toISOString(),
            Number(totalPrice),
            Number(totalScore),
            img,
            user.id,
            establishment.id
        )
        const res = await new PublicationsRepository().save(publication)
        console.log('create publication res', res)
        if (res !== undefined && !(res instanceof ErrorResponseData)) {
            await Promise.all(
                products.map(async (p: any) => {
                    const product = new ProductData(
                        uuidv4().toString(),
                        p.name,
                        new Date().toISOString(),
                        p.price,
                        p.score,
                        publication.id
                    )
                    const resP = await new ProductsRepository().save(product)
                    console.log('create product res', resP)
                })
            )
            router.push({ name: ROUTES.HOME })
        }
    } catch (e) {
        console.log(e)
    } finally {
        isLoading.value = false
    }
}