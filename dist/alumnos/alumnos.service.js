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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlumnosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const alumnos_entity_1 = require("../entities/alumnos.entity");
const carreras_entity_1 = require("../entities/carreras.entity");
const usuarios_entity_1 = require("../entities/usuarios.entity");
const pertenece_entity_1 = require("../entities/pertenece.entity");
const participa_entity_1 = require("../entities/participa.entity");
const eventos_entity_1 = require("../entities/eventos.entity");
const actividades_entity_1 = require("../entities/actividades.entity");
let AlumnosService = class AlumnosService {
    constructor(alumnoRepository, carreraRepository, usuarioRepository, perteneceRepository, participaRepository, eventoRepository, actividadRepository) {
        this.alumnoRepository = alumnoRepository;
        this.carreraRepository = carreraRepository;
        this.usuarioRepository = usuarioRepository;
        this.perteneceRepository = perteneceRepository;
        this.participaRepository = participaRepository;
        this.eventoRepository = eventoRepository;
        this.actividadRepository = actividadRepository;
    }
    async findAllWithCarreras(num_control, nombre, ap_paterno, sexo, semestre, nombre_corto, page = 1, limit = 50) {
        const query = this.alumnoRepository.createQueryBuilder('alumno')
            .leftJoinAndSelect('alumno.carrera', 'carrera');
        if (num_control) {
            query.andWhere('alumno.Num_control = :num_control', { num_control });
        }
        if (nombre) {
            query.andWhere('alumno.Nombre LIKE :nombre', { nombre: `%${nombre}%` });
        }
        if (ap_paterno) {
            query.andWhere('alumno.Ap_paterno LIKE :ap_paterno', { ap_paterno: `%${ap_paterno}%` });
        }
        if (sexo) {
            query.andWhere('alumno.Sexo = :sexo', { sexo });
        }
        if (semestre) {
            query.andWhere('alumno.Semestre = :semestre', { semestre });
        }
        if (nombre_corto) {
            query.andWhere('carrera.Nombre_corto LIKE :nombre_corto', { nombre_corto: `%${nombre_corto}%` });
        }
        query.skip((page - 1) * limit).take(limit);
        const [alumnos, total] = await query.getManyAndCount();
        if (!alumnos || alumnos.length === 0) {
            throw new common_1.NotFoundException('No se encontraron alumnos');
        }
        return {
            total,
            currentPage: page,
            totalPages: Math.ceil(total / limit),
            alumnos: alumnos.map(alumno => this.mapAlumnoWithCarrera(alumno)),
        };
    }
    mapAlumnoWithCarrera(alumno) {
        return {
            id_alumno: alumno.Id_alumno_pk,
            num_control: alumno.Num_control,
            nombre: alumno.Nombre,
            ap_paterno: alumno.Ap_paterno,
            ap_materno: alumno.Ap_materno,
            sexo: alumno.Sexo,
            semestre: alumno.Semestre,
            carrera: {
                nombre: alumno.carrera.Nombre,
                nombre_corto: alumno.carrera.Nombre_corto,
            },
        };
    }
    async findOne(num_control) {
        const alumno = await this.alumnoRepository.findOneBy({ Num_control: num_control });
        if (!alumno)
            throw new common_1.NotFoundException('No se encontró el alumno con el numero de control proporcionado');
        alumno.Foto = `${process.env.HOST_URL}alumnos/${alumno.Foto}`;
        console.log("Alumno por numero de control");
        return alumno;
    }
    async getAlumnoDetail(id) {
        const alumno = await this.alumnoRepository
            .createQueryBuilder('alumno')
            .leftJoinAndSelect('alumno.pertenencias', 'pertenencias')
            .leftJoinAndSelect('pertenencias.actividad', 'actividad')
            .leftJoinAndSelect('alumno.participaciones', 'participaciones')
            .leftJoinAndSelect('participaciones.evento', 'evento')
            .leftJoinAndSelect('alumno.carrera', 'carrera')
            .where('alumno.Id_alumno_pk = :id', { id })
            .getOne();
        if (!alumno) {
            throw new common_1.NotFoundException(`No se encontró el alumno con el id ${id}`);
        }
        return this.mapAlumnoDetail(alumno);
    }
    mapAlumnoDetail(alumno) {
        if (!alumno.Foto)
            alumno.Foto = "alumno_default.jpg";
        return {
            num_control: alumno.Num_control,
            nombre: alumno.Nombre,
            ap_paterno: alumno.Ap_paterno,
            ap_materno: alumno.Ap_materno,
            sexo: alumno.Sexo,
            fecha_nac: alumno.Fecha_nac,
            semestre: alumno.Semestre,
            nivel: alumno.Nivel,
            foto: `${process.env.HOST_URL}/alumnos/${alumno.Foto}`,
            telefono: alumno.Telefono,
            correo: alumno.Correo,
            carrera: {
                nombre: alumno.carrera.Nombre,
                clave: alumno.carrera.Clave,
                nombre_corto: alumno.carrera.Nombre_corto,
            },
            actividades: alumno.pertenencias.map(pertenece => ({
                nombre: pertenece.actividad.Nombre,
                tipo: pertenece.actividad.Tipo,
                horas: pertenece.Horas,
                activo: pertenece.Activo,
            })),
            eventos: alumno.participaciones.map(participa => ({
                nombre: participa.evento.Nombre,
                fecha: participa.evento.Fecha,
            })),
        };
    }
    async createAlumno(createAlumnoDto, imagen) {
        const existAlumno = await this.alumnoRepository
            .findOne({ where: [{ Num_control: createAlumnoDto.Num_control },
                { Correo: createAlumnoDto.Correo }] });
        if (existAlumno)
            throw new common_1.BadRequestException(`Ya existe este numero de control y/o email`);
        const carrera = await this.carreraRepository
            .findOneBy({ Id_carrera_pk: createAlumnoDto.carrera });
        if (!carrera) {
            throw new common_1.BadRequestException(`Carrera con ID ${createAlumnoDto.carrera} no encontrada`);
        }
        const newAlumno = this.alumnoRepository.create({
            ...createAlumnoDto,
            carrera,
            Foto: imagen?.filename,
        });
        const savedAlumno = await this.alumnoRepository.save(newAlumno);
        return { message: 'Alumno creado correctamente', success: true, alumno: savedAlumno };
    }
    async remove(id) {
        await this.alumnoRepository.delete(id);
    }
};
exports.AlumnosService = AlumnosService;
exports.AlumnosService = AlumnosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(alumnos_entity_1.Alumno)),
    __param(1, (0, typeorm_1.InjectRepository)(carreras_entity_1.Carrera)),
    __param(2, (0, typeorm_1.InjectRepository)(usuarios_entity_1.Usuario)),
    __param(3, (0, typeorm_1.InjectRepository)(pertenece_entity_1.Pertenece)),
    __param(4, (0, typeorm_1.InjectRepository)(participa_entity_1.Participa)),
    __param(5, (0, typeorm_1.InjectRepository)(eventos_entity_1.Evento)),
    __param(6, (0, typeorm_1.InjectRepository)(actividades_entity_1.Actividad)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], AlumnosService);
//# sourceMappingURL=alumnos.service.js.map