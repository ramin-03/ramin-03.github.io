import type { ExperienceCardData } from '@/components/ExperienceCard'
import type { GeneralInfoCardData } from '@/components/GeneralInfoCard'
import type { KeySkillsCardData } from '@/components/KeySkillsCard'
import type { SkillsSummaryCardData } from '@/components/SkillsSummaryCard'
import type { AdditionalEnhancementsCardData } from '@/components/AdditionalEnhancementsCard'

export interface DataModel {
  keySkills: KeySkillsCardData
  generalInfo: GeneralInfoCardData
  skillsSummary: SkillsSummaryCardData
  experience: ExperienceCardData
  head: {
    title: string
    description: string
  }
  AdditionalEnhancements: AdditionalEnhancementsCardData
}
