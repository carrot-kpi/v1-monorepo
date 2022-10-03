import React from 'react'
import { Template } from '@carrot-kpi/sdk'
import { useTemplateModule } from '../../hooks/useTemplateModule'
import { addBundleForTemplate } from '../../i18n'
import { useEffect, useState } from 'react'
import { TFunction, useTranslation } from 'react-i18next'

interface TemplateComponentProps {
  type: 'creationForm' | 'page'
  template?: Template
  customBaseUrl?: string
  props?: any
}

export function TemplateComponent({
  type,
  template,
  customBaseUrl,
  props = {},
}: TemplateComponentProps) {
  const { t, i18n } = useTranslation()
  const { loading, bundle, Component } = useTemplateModule(type, template, customBaseUrl)

  const [translateWithNamespace, setTranslateWithNamespace] = useState<TFunction>(
    () => () => ''
  )

  useEffect(() => {
    if (loading || !template || !bundle || !Component) return
    const namespace = `${template.specification.cid}${type}`
    addBundleForTemplate(i18n, namespace, bundle)
    setTranslateWithNamespace(() => (key: any, options?: any) => {
      return t(key, { ...options, ns: namespace })
    })
  }, [Component, bundle, t, i18n, loading, template, type])

  if (loading || !Component) return <>Loading...</>
  return <Component {...props} t={translateWithNamespace} />
}
