import type { Marketplace } from "./marketplace";

export interface ReadinessCheck {
  marketplace: Marketplace;

  score: number;

  ready: boolean;

  missing: string[];

  suggestions: string[];
}