import { IPFS_GATEWAY, Template } from '@carrot-kpi/sdk'
import { TemplateBundle } from '../i18n'
import { FunctionComponent, useEffect, useMemo, useState } from 'react'
import { useFederatedModuleContainer } from './useFederatedModuleContainer'

export const useTemplateModule = (entryPostfix: string, template?: Template) => {
  const { baseUrl, entry } = useMemo(() => {
    if (!template) return {}
    return {
      baseUrl: `${IPFS_GATEWAY}${template.specification.cid}`,
      entry: `${template.specification.commitHash}${entryPostfix}`,
    }
  }, [template, entryPostfix])
  const { loading: loadingFederatedModule, container } = useFederatedModuleContainer(
    baseUrl,
    entry
  )

  const [loadingExport, setLoadingExport] = useState(false)
  const [Component, setComponent] = useState<FunctionComponent<any> | null>(null)
  const [bundle, setBundle] = useState<TemplateBundle | null>(null)

  useEffect(() => {
    let cancelled = false
    const fetchExports = async () => {
      if (!container || loadingFederatedModule) return
      if (!cancelled) setLoadingExport(true)
      try {
        const componentsFactory = await container.get('./component')
        const { Component } = componentsFactory()
        const i18nFactory = await container.get('./i18n')
        const { bundle } = i18nFactory()
        if (!cancelled) setComponent(() => Component)
        if (!cancelled) setBundle(bundle)
      } finally {
        if (!cancelled) setLoadingExport(false)
      }
    }
    fetchExports()
    return () => {
      cancelled = true
    }
  }, [container, loadingFederatedModule])

  return {
    loading: loadingFederatedModule || loadingExport,
    Component,
    bundle,
  }
}
