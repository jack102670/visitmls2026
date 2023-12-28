<template>
    <div>
      <main class="flex-1 overflow-x-hidden text overflow-y-auto bg-[#F8F9FA] dark:bg-[#141517] p-10 sm:ml-64 h-screen">
        <div class="container mx-auto">
          <div class="bg-[#f7fbff] dark:bg-[#25262b] rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Movie Explorer</h2>
            </div>
  
            <!-- Display a list of movies from the TMDb API -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              <div v-for="movie in movies" :key="movie.id" class="mb-4">
                <img :src="getPosterUrl(movie.poster_path)" :alt="movie.title" class="w-full h-64 object-cover rounded-md" />
                <h3 class="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{{ movie.title }}</h3>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MovieExplorer',
    data() {
      return {
        movies: [],
      };
    },
    mounted() {
      // Fetch movies from the TMDb API
      this.fetchMovies();
    },
    methods: {
      async fetchMovies() {
        try {
          const apiKey = '03ac7398211ab1030258837c8f8ee1da';
          const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=1`);
          const data = await response.json();
  
          // Map the response data to the format expected by the component
          this.movies = data.results.map((movie) => ({
            id: movie.id,
            title: movie.title,
            poster_path: movie.poster_path,
          }));
        } catch (error) {
          console.error('Error fetching movies:', error);
        }
      },
      getPosterUrl(posterPath) {
        // Adjust the base URL as needed
        const baseUrl = 'https://image.tmdb.org/t/p/w500';
        return posterPath ? `${baseUrl}${posterPath}` : ''; // Return empty string for movies without a poster
      },
    },
  };
  </script>
  