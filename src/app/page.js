const API_KEY = process.env.API_KEY;

import Results from '@/components/Results';
import React from 'react'

//https://api.themoviedb.org/3/trending/all/week?api_key=dc6bda3506bc6e9f9d3c5f9fb5bc890b&language=en-US&page=1

export default async function Home({searchParams}) {
  const genre = searchParams.genre || 'fetchTrending'
  const res = await fetch(`https://api.themoviedb.org/3${genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`}?api_key=${API_KEY}&language=en-US&page=1`,
    {next: {revalidate: 10000}}
  )

    const data = await res.json()
    if(!res.ok){
      throw new Error('Failed to fetch data')
    }
    const results = data.results

  return (
    <div>
      <Results results = {results} />
    </div>
  );
}
