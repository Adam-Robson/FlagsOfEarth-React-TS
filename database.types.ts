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
      books: {
        Row: {
          author: string | null
          created_at: string | null
          id: number
          image_name: string | null
          pages: number | null
          publisher: string | null
          title: string | null
          year: number | null
        }
        Insert: {
          author?: string | null
          created_at?: string | null
          id?: number
          image_name?: string | null
          pages?: number | null
          publisher?: string | null
          title?: string | null
          year?: number | null
        }
        Update: {
          author?: string | null
          created_at?: string | null
          id?: number
          image_name?: string | null
          pages?: number | null
          publisher?: string | null
          title?: string | null
          year?: number | null
        }
        Relationships: []
      }
      countries: {
        Row: {
          country: string | null
          created_at: string
          id: number
          iso2: string | null
        }
        Insert: {
          country?: string | null
          created_at?: string
          id?: number
          iso2?: string | null
        }
        Update: {
          country?: string | null
          created_at?: string
          id?: number
          iso2?: string | null
        }
        Relationships: []
      }
      songs: {
        Row: {
          created_at: string
          id: number
          name: string | null
          path: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
          path?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
          path?: string | null
        }
        Relationships: []
      }
      todo: {
        Row: {
          body: string
          complete: boolean
          created_at: string
          id: number
        }
        Insert: {
          body: string
          complete: boolean
          created_at?: string
          id?: number
        }
        Update: {
          body?: string
          complete?: boolean
          created_at?: string
          id?: number
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
