import { useEffect, useState } from 'react'
import { Template, Fetcher } from '@carrot-kpi/v1-sdk'
import { useActiveWeb3React } from './useActiveWeb3React'

export function useKpiTokenTemplates(): { loading: boolean; templates: Template[] } {
  const { chainId, library } = useActiveWeb3React()

  const [templates, setTemplates] = useState<Template[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    async function fetchData(): Promise<void> {
      if (!chainId || library == null) return
      setLoading(true)
      try {
        const templates = await Fetcher.fetchKpiTokenTemplates(chainId, library)
        if (!cancelled) setTemplates(templates)
      } catch (error) {
        console.error('error fetching kpi token templates', error)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    void fetchData()
    return () => {
      cancelled = true
    }
  }, [chainId, library])

  return { loading, templates }
}
