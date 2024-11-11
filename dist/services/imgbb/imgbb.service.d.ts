export declare class ImgBBService {
    private apiKey;
    private apiUrl;
    constructor();
    uploadImage(imageBase64: string, name?: string, expiration?: number): Promise<any>;
}
