import { CreateAlumnoDto } from './dtos/create-alumno.dto';
import { AlumnosService } from './alumnos.service';
export declare class AlumnosController {
    private readonly alumnosService;
    constructor(alumnosService: AlumnosService);
    getAllAlumnos(num_control?: string, nombre?: string, ap_paterno?: string, sexo?: string, semestre?: number, nombre_corto?: string, page?: number): Promise<{
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
    getByIdAlumnos(id: number): Promise<{
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
    createAlumno(createAlumnoDto: CreateAlumnoDto, imagen: Express.Multer.File): Promise<{
        message: string;
        success: boolean;
        alumno: import("../entities/alumnos.entity").Alumno;
    }>;
}
