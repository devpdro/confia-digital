// Importações e componente CreditCard
import React, { useEffect, useRef, useState } from 'react'

import { IMAGE } from 'src/presentation/assets'
import { IconCreditCard, IconCurrencyDollarOff, IconCalendarOff } from '@tabler/icons-react'

import S from './credit-card.module.scss'

interface CreditCardProps {
  className?: string
  title?: string
  subtitle?: string
}

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value))

const CreditCard: React.FC<CreditCardProps> = ({
  className,
  title = 'Liberdade para você e seu bolso',
  subtitle = 'CARTÃO DE CRÉDITO'
}) => {
  const heroRef = useRef<HTMLDivElement | null>(null)
  const cardRef = useRef<HTMLDivElement | null>(null)

  const [enabled, setEnabled] = useState<boolean>(true)

  useEffect(() => {
    const updateEnabled = () => setEnabled(window.innerWidth >= 768)
    updateEnabled()
    window.addEventListener('resize', updateEnabled)
    return () => window.removeEventListener('resize', updateEnabled)
  }, [])

  useEffect(() => {
    const el = heroRef.current
    const card = cardRef.current
    if (!el || !card) return

    let raf = 0
    let targetRotateX = 0
    let targetRotateY = 0
    let currentRotateX = 0
    let currentRotateY = 0
    let glowX = '50%'
    let glowY = '50%'

    const maxTilt = 20 // graus — mais agressivo, acompanha mais o cursor
    const glowFollowPct = 10 // movimento máximo em porcentagem para luz (mais centralizado)

    // Estado de animação de entrada (profundidade Z + descida Y)
    let baseY = -80 // px, começa mais acima
    let baseZ = -240 // px, começa mais ao fundo
    let opacity = 1 // sem efeito de surgimento; tamanho e visibilidade constantes
    let entranceDone = false
    let entranceAnimating = false
    const entranceDuration = 1800 // mais longo e suave
    const easeOutQuint = (t: number) => 1 - Math.pow(1 - t, 5)
    const easeOutBack = (t: number, s = 0.12) => {
      const c3 = s + 1
      return 1 + c3 * Math.pow(t - 1, 3) + s * Math.pow(t - 1, 2)
    }
    let entranceExtraTiltX = 0
    let entranceProgress = 0

    let baseSpinZ = 0

    const animate = () => {
      // suavização do tilt para um movimento mais clean
      currentRotateX += (targetRotateX - currentRotateX) * 0.15
      currentRotateY += (targetRotateY - currentRotateY) * 0.15
      const rotateX = currentRotateX + entranceExtraTiltX
      const rotateY = currentRotateY
      card.style.transform = `translate3d(0px, ${baseY}px, ${baseZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${baseSpinZ}deg)`
      card.style.opacity = String(opacity)
      el.style.setProperty('--gloss-x', glowX)
      el.style.setProperty('--gloss-y', glowY)
      const glossO = entranceAnimating ? String(0.2 + entranceProgress * (enabled ? 0.4 : 0.2)) : (enabled ? '0.6' : '0.4')
      el.style.setProperty('--gloss-o', glossO)
      el.style.setProperty('--glow-x', glowX)
      el.style.setProperty('--glow-y', glowY)
      raf = requestAnimationFrame(animate)
    }

    const computeCardCenterPerc = () => {
      const heroRect = el.getBoundingClientRect()
      const cardRect = card.getBoundingClientRect()
      const cx = ((cardRect.left + cardRect.width / 2) - heroRect.left) / heroRect.width * 100
      const cy = ((cardRect.top + cardRect.height / 2) - heroRect.top) / heroRect.height * 100
      return { cx, cy }
    }

    const setGlowToCardCenter = () => {
      const { cx, cy } = computeCardCenterPerc()
      glowX = `${clamp(cx, 0, 100)}%`
      glowY = `${clamp(cy, 0, 100)}%`
    }

    const onMove = (e: MouseEvent) => {
      if (!enabled) return
      const heroRect = el.getBoundingClientRect()
      const cardRect = card.getBoundingClientRect()
      const x = e.clientX - cardRect.left
      const y = e.clientY - cardRect.top
      const nx = x / cardRect.width // 0..1 relativo ao cartão
      const ny = y / cardRect.height // 0..1 relativo ao cartão
      const tiltY = (nx - 0.5) * 2 // -1..1
      const tiltX = (0.5 - ny) * 2 // -1..1
      targetRotateX = clamp(tiltX * maxTilt, -maxTilt, maxTilt)
      targetRotateY = clamp(tiltY * maxTilt, -maxTilt, maxTilt)
      // luz baseada no centro do cartão, com leve deslocamento do cursor
      const baseX = ((cardRect.left + cardRect.width / 2) - heroRect.left) / heroRect.width * 100
      const baseY = ((cardRect.top + cardRect.height / 2) - heroRect.top) / heroRect.height * 100
      const gx = baseX + (nx - 0.5) * glowFollowPct
      const gy = baseY + (ny - 0.5) * glowFollowPct
      glowX = `${clamp(gx, 0, 100)}%`
      glowY = `${clamp(gy, 0, 100)}%`
    }

    const onLeave = () => {
      targetRotateX = 0
      targetRotateY = 0
      setGlowToCardCenter()
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    // centraliza a luz no início exatamente atrás do cartão
    setGlowToCardCenter()
    raf = requestAnimationFrame(animate)

    // Anima apenas uma vez quando ~25% da seção estiver visível
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !entranceDone && !entranceAnimating) {
          entranceAnimating = true
          const start = performance.now()
          // leve tilt inicial para reforçar a sensação de "de cima"
          let baseTiltX = -12
          const step = (now: number) => {
            const t = Math.min(1, (now - start) / entranceDuration)
            const eMain = easeOutQuint(t)
            const eBack = easeOutBack(t, 0.10) // overshoot sutil e controlado
            baseY = -80 * (1 - eBack)
            baseZ = -240 * (1 - eMain)
            // remove fade de surgimento; mantém opacidade plena
            opacity = 1
            // aplica tilt inicial decrescendo até 0
            entranceExtraTiltX = baseTiltX * (1 - eMain)
            // giro suave em Z decrescendo até 0
            baseSpinZ = -12 * (1 - eMain)
            entranceProgress = eMain
            if (t < 1) {
              requestAnimationFrame(step)
            } else {
              entranceDone = true
              entranceAnimating = false
              // garante luz centralizada ao finalizar a entrada
              setGlowToCardCenter()
              entranceExtraTiltX = 0
            }
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.25 }
    )
    observer.observe(el)

    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [enabled])

  return (
    <section className={`${S.hero} ${className || ''}`} ref={heroRef}>
      <div className={S.gradientOverlay} />
      <div className={S.container}>
        <div className={S.badge}>{subtitle}</div>
        <h1 className={S.title}>{title}</h1>

        <div className={S.cardWrap} style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}>
          <div className={S.card} ref={cardRef} style={{ willChange: 'transform', transformStyle: 'preserve-3d' }}>
            <img className={S.cardImg} src={IMAGE.CARTAO.src} alt="Cartões Confia Digital" />
            <div className={S.gloss} />
          </div>
          <div className={S.reflection} />
        </div>

        <div className={S.icons}>
          <div className={S.iconItem}>
            <IconCreditCard className={S.icon} stroke={1.8} aria-hidden />
            <span className={S.iconText}>Até 18x sem juros</span>
          </div>
          <div className={S.iconItem}>
            <IconCurrencyDollarOff className={S.icon} stroke={1.8} aria-hidden />
            <span className={S.iconText}>Sem taxas</span>
          </div>
          <div className={S.iconItem}>
            <IconCalendarOff className={S.icon} stroke={1.8} aria-hidden />
            <span className={S.iconText}>Sem anuidade</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreditCard