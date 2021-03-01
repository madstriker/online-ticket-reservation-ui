export interface MessageResponse {

    message: string ;
}


export class Error {
    message?: string;
}

export interface ErrorResponse  {
  header?:any;
  error?: Error;

}