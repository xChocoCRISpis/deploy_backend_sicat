"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImgBBService = void 0;
const common_1 = require("@nestjs/common");
let ImgBBService = class ImgBBService {
    constructor() {
        this.apiKey = process.env.IMGBB_API_KEY;
        this.apiUrl = process.env.IMGBB_API_URL;
    }
    async uploadImage(imageBase64, name, expiration) {
        const formData = new URLSearchParams();
        formData.append("key", this.apiKey);
        formData.append("image", imageBase64);
        if (name)
            formData.append("name", name);
        if (expiration)
            formData.append("expiration", expiration.toString());
        try {
            const response = await fetch(this.apiUrl, {
                method: "POST",
                body: formData,
            });
            if (!response.ok) {
                throw new Error(`Error en la respuesta: ${response.statusText}`);
            }
            const data = await response.json();
            return {
                id: data.data.id,
                title: data.data.title,
                url: data.data.url,
                thumb_url: data.data.thumb.url,
                delete_url: data.data.delete_url
            };
        }
        catch (error) {
            throw new Error(`Error uploading image to ImgBB: ${error.message}`);
        }
    }
};
exports.ImgBBService = ImgBBService;
exports.ImgBBService = ImgBBService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ImgBBService);
//# sourceMappingURL=imgbb.service.js.map