export interface GoogleReview {
  author: string
  rating: number
  text: string
  relativeTime: string
}

export interface PlaceData {
  rating: number
  reviewCount: number
  reviews: GoogleReview[]
}

// Shown if the API key isn't set or the request fails
const FALLBACK: PlaceData = {
  rating: 4.1,
  reviewCount: 810,
  reviews: [
    {
      author: 'Thekingster2017',
      rating: 5,
      text: "Hands down the best pizza we have ever eaten. The Dan's All Season pizza — we fell in love with the first bite. We will be back every time we're in Palm Desert.",
      relativeTime: 'a year ago',
    },
    {
      author: 'Safari425134',
      rating: 5,
      text: 'The pizza was delicious, the service was excellent, and the prices were reasonable. The atmosphere was warm and welcoming. We will definitely go back.',
      relativeTime: '2 years ago',
    },
    {
      author: 'Annie L.',
      rating: 5,
      text: "Great pizza, fast delivery. We were very pleased and the kids loved their specialty pizza. Classic Italian-American done right — this place is the real deal.",
      relativeTime: '6 months ago',
    },
  ],
}

/**
 * Fetches live rating + top reviews from Google Places API (New).
 * Cached for 24 hours via Next.js ISR — costs nothing at that frequency.
 * Falls back to hardcoded data if env vars aren't set or the request fails.
 */
export async function getPlaceData(): Promise<PlaceData> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  if (!apiKey || !placeId) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('[google-places] GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID not set. Using fallback data.')
    }
    return FALLBACK
  }

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}`,
      {
        headers: {
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask': 'rating,userRatingCount,reviews',
          'Accept-Language': 'en',
        },
        // Revalidate every 24 hours — keeps data fresh without hammering the API
        next: { revalidate: 86400 },
      }
    )

    if (!res.ok) {
      throw new Error(`Places API responded with ${res.status}: ${await res.text()}`)
    }

    const data = await res.json()

    return {
      rating: data.rating ?? FALLBACK.rating,
      reviewCount: data.userRatingCount ?? FALLBACK.reviewCount,
      reviews: ((data.reviews as any[]) ?? [])
        .slice(0, 3)
        .map((r) => ({
          author: r.authorAttribution?.displayName ?? 'Google Reviewer',
          rating: r.rating ?? 5,
          text: r.text?.text ?? '',
          relativeTime: r.relativePublishTimeDescription ?? '',
        })),
    }
  } catch (err) {
    console.error('[google-places] Failed to fetch place data:', err)
    return FALLBACK
  }
}
