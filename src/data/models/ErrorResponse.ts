import type { ErrorResponse } from "@/client";

export class ErrorResponseData implements ErrorResponse {
    constructor(
        public message: string
    ) {
        this.message = message
    }
}