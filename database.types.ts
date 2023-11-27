export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      countries: {
        Row: {
          country: string | null
          created_at: string
          id: number
          iso2: string | null
          flag: string | null
        }
        Insert: {
          country?: string | null
          created_at?: string
          id?: number
          iso2?: string | null
          flag?: string | null

        }
        Update: {
          country?: string | null
          created_at?: string
          id?: number
          iso2?: string | null
          flag?: string | null

        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export interface CountryPropTypes {
  id: number
  created_at: string
  name: string | null
  iso2: string | null
  flag: string | null
  region: string | null
}
