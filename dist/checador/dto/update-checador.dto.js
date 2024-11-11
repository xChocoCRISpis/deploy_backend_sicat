"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateChecadorDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_checador_dto_1 = require("./create-checador.dto");
class UpdateChecadorDto extends (0, mapped_types_1.PartialType)(create_checador_dto_1.CreateChecadorDto) {
}
exports.UpdateChecadorDto = UpdateChecadorDto;
//# sourceMappingURL=update-checador.dto.js.map