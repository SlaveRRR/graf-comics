export const emailRegexp =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

export const passwordRegexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/gi;
