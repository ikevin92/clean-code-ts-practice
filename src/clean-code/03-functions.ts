(() => {
  // función para obtener información de una película por Id
  function getMovieById(id: string) {
    console.log({ id });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getMovieCastById(id: string) {
    console.log({ id });
  }

  // funcion para obtener el bio del actor por el id
  function getActorBioById(id: string) {
    console.log({ id });
  }

  // Crear una película
  interface Movie {
    title: string;
    description: string;
    rating: number;
    cast: string[];
  }

  function createMovie(movie: Movie) {
    const { title, description, rating, cast } = movie;
    console.log({ title, description, rating, cast });
  }

  // Crea un nuevo actor
  interface Actor {
    fullName: string;
    birthdate: Date;
  }

  function checkFullName(fullname: string) {
    console.log(fullname);
    return true;
  }

  function createActor({ fullName, birthdate }: Actor): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..

    if (checkFullName(fullName)) return false;

    console.log('Crear actor', birthdate);
    return true;
  }

  // Continuar
  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }): number => {
    if (isDead) return 1500;

    if (isSeparated) return 2500;

    return isRetired ? 3000 : 4000;
  };
})();
