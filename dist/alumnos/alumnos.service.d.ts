import { Repository } from 'typeorm';
import { Alumno } from '../entities/alumnos.entity';
import { Carrera } from '../entities/carreras.entity';
import { CreateAlumnoDto } from './dtos/create-alumno.dto';
import { Usuario } from 'src/entities/usuarios.entity';
import { Pertenece } from 'src/entities/pertenece.entity';
import { Participa } from 'src/entities/participa.entity';
import { Evento } from 'src/entities/eventos.entity';
import { Actividad } from 'src/entities/actividades.entity';
export declare class AlumnosService {
    private readonly alumnoRepository;
    private readonly carreraRepository;
    private readonly usuarioRepository;
    private readonly perteneceRepository;
    private readonly participaRepository;
    private readonly eventoRepository;
    private readonly actividadRepository;
    constructor(alumnoRepository: Repository<Alumno>, carreraRepository: Repository<Carrera>, usuarioRepository: Repository<Usuario>, perteneceRepository: Repository<Pertenece>, participaRepository: Repository<Participa>, eventoRepository: Repository<Evento>, actividadRepository: Repository<Actividad>);
    findAllWithCarreras(num_control?: string, nombre?: string, ap_paterno?: string, sexo?: string, semestre?: number, nombre_corto?: string, page?: number, limit?: number): Promise<{
        total: number;
        currentPage: number;
        totalPages: number;
        alumnos: {
            id_alumno: number;
            num_control: string;
            nombre: string;
            ap_paterno: string;
            ap_materno: string;
            sexo: string;
            semestre: number;
            carrera: {
                nombre: string;
                nombre_corto: string;
            };
        }[];
    }>;
    private mapAlumnoWithCarrera;
    findOne(num_control: string): Promise<Alumno>;
    getAlumnoDetail(id: number): Promise<{
        num_control: string;
        nombre: string;
        ap_paterno: string;
        ap_materno: string;
        sexo: string;
        fecha_nac: string;
        semestre: number;
        nivel: number;
        foto: string;
        telefono: string;
        correo: string;
        carrera: {
            nombre: string;
            clave: string;
            nombre_corto: string;
        };
        actividades: {
            nombre: string;
            tipo: string;
            horas: number;
            activo: boolean;
        }[];
        eventos: {
            nombre: string;
            fecha: string;
        }[];
    }>;
    private mapAlumnoDetail;
    createAlumno(createAlumnoDto: CreateAlumnoDto, imagen: Express.Multer.File): Promise<{
        message: string;
        success: boolean;
        alumno: Alumno;
    }>;
    remove(id: number): Promise<void>;
}
