"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBitacoraDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_bitacora_dto_1 = require("./create-bitacora.dto");
class UpdateBitacoraDto extends (0, mapped_types_1.PartialType)(create_bitacora_dto_1.CreateBitacoraDto) {
}
exports.UpdateBitacoraDto = UpdateBitacoraDto;
//# sourceMappingURL=update-bitacora.dto.js.map