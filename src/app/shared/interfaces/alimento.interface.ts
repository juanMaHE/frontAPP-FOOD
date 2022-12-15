export interface Alimento {
    id: number;
    nombre: string;
    imagen: string;
    categoria?: Categoria;
}
interface Categoria {
    id: number;
    nombre: string;
    imagen: string;
}