export class Partido {
  $key?: string;
  nombre: string;
  nombreCompleto: string;
  descripcion: string;
  active: boolean;
}
export class Candidato {
  $key?: string;
  partidoId: string;
  nombre: string;
  descripcion: string;
}
export class Voto {
  $key?: string;
  candidatoId: string;
  tipo: string;
}
