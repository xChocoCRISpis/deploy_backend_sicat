"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateActividadeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_actividade_dto_1 = require("./create-actividade.dto");
class UpdateActividadeDto extends (0, mapped_types_1.PartialType)(create_actividade_dto_1.CreateActividadeDto) {
}
exports.UpdateActividadeDto = UpdateActividadeDto;
//# sourceMappingURL=update-actividade.dto.js.map