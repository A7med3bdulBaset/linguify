import { Link } from 'react-router-dom'
import Svg from '../Svg'
import { cn } from '@lib/functions/cn'

/**
 * component props
 */
interface Props {
  className?: string
  isLink?: boolean
  to?: string
  showText?: boolean
}

/**
 * logo
 *
 * @param props - component props
 *
 * @returns logo component
 */
const Logo = ({ className, isLink = true, to = '/', showText = true }: Props) => {
  const svg = (
    <Svg
      className={cn('h-10', showText ? 'aspect-[3545.51/1000]' : 'aspect-[744.87/1000]', className)}
      strokeWidth={0}
      viewBox={cn('0 0', showText ? '3545.51 1000' : '744.87 1000')}
      pathProps={{ className: 'fill-current' }}
      paths={[
        {
          value:
            'm497.04,743.73l-67.66-68.46c.23-.19.47-.37.7-.56,15.38-13.14,25.12-32.67,25.12-54.43,0-39.52-32.01-71.53-71.49-71.53-21.44,0-40.68,9.46-53.78,24.37-.23.28-.51.56-.75.89l-71.53-72.37,71.39-70.37c13.14,15.38,32.67,25.12,54.43,25.12,39.52,0,71.53-32.01,71.53-71.49,0-21.44-9.46-40.68-24.37-53.78l70.93-69.9,243.3,240.42-100.33,98c24.33,1.58,43.53,21.81,43.53,46.46s-20.83,46.6-46.55,46.6-45.48-19.81-46.51-44.64l-97.96,95.67Z',
          props: { id: 'right', className: 'fill-[#00a2ea]' }
        },
        {
          value:
            'm484.94,760.08l-68.46,67.66c-.19-.23-.37-.47-.56-.7-13.14-15.38-32.67-25.12-54.43-25.12-39.52,0-71.53,32.01-71.53,71.49,0,21.44,9.46,40.68,24.37,53.78.28.23.56.51.89.75l-72.37,71.53-70.37-71.39c15.38-13.14,25.12-32.67,25.12-54.43,0-39.52-32.01-71.53-71.49-71.53-21.44,0-40.68,9.46-53.78,24.37L2.43,755.56l96.42-97.58c-25.54-.19-46.18-21.02-46.18-46.55s20.83-46.55,46.55-46.55,46.04,20.32,46.55,45.62l97.07-98.24,98,100.33c1.58-24.33,21.81-43.53,46.46-43.53s46.6,20.83,46.6,46.55-19.81,45.48-44.64,46.51l95.67,97.96Z',
          props: { id: 'bottom', className: 'fill-[#044fa0]' }
        },
        {
          value:
            'm0,239.92l68.46-67.66c.19.23.37.47.56.7,13.14,15.38,32.67,25.12,54.43,25.12,39.52,0,71.53-32.01,71.53-71.49,0-21.44-9.46-40.68-24.37-53.78-.28-.23-.56-.51-.89-.75L242.09.53l240.42,243.91-96.42,97.58c25.54.19,46.18,21.02,46.18,46.55s-20.83,46.55-46.55,46.55-46.04-20.32-46.55-45.62l-97.07,98.24-98-100.33c-1.58,24.33-21.81,43.53-46.46,43.53s-46.6-20.83-46.6-46.55,19.81-45.48,44.64-46.51L0,239.92Z',
          props: { id: 'top', className: 'fill-[#0070ba]' }
        },
        // text paths
        ...(showText
          ? [
              'm964.2,162.66h77.99v581.78h-77.99V162.66Z',
              'm1140.34,253.2c0-16.14,5.97-30.1,17.93-41.91,11.95-11.8,26.14-17.7,42.58-17.7s30.1,5.9,41.91,17.7c11.8,11.81,17.71,25.77,17.71,41.91s-5.9,30.48-17.71,42.13c-11.81,11.65-25.77,17.48-41.91,17.48s-30.63-5.83-42.58-17.48c-11.96-11.65-17.93-25.69-17.93-42.13Zm21.96,121.47h77.09v369.77h-77.09v-369.77Z',
              'm1341.59,744.44v-369.77h76.2v61.4c22.41-24.8,42.73-42.95,60.96-54.46,18.22-11.5,38.55-17.26,60.96-17.26,33.46,0,62.08,11.06,85.83,33.17,23.75,22.12,35.63,48.71,35.63,79.78v267.13h-77.99v-244.27c0-20.02-6.5-36.6-19.5-49.75-13-13.15-29.51-19.72-49.53-19.72-26,0-48.41,10.98-67.23,32.94-18.83,21.96-28.24,48.48-28.24,79.56v201.25h-77.09Z',
              'm2065.9,374.66h76.2v354.98c0,52.29-18.01,96.74-54.01,133.34-36.01,36.6-79.56,54.91-130.65,54.91-38.85,0-74.56-10.53-107.12-31.6-32.57-21.07-56.47-53.11-71.71-96.14h80.68c24.2,40.04,57.82,60.06,100.85,60.06,29.28,0,54.23-10.53,74.85-31.6,20.62-21.07,30.93-46.39,30.93-75.97v-69.92c-37.65,54.68-85.16,82.02-142.53,82.02-47.22,0-88.37-19.5-123.48-58.49-35.11-38.99-52.67-85.08-52.67-138.27s17.1-98.75,51.32-136.7c34.21-37.94,74.92-56.92,122.14-56.92,60.96,0,109.36,29.44,145.22,88.3v-77.99Zm10.76,184.21c0-34.66-12.03-63.65-36.08-86.95-24.06-23.31-53.86-34.96-89.42-34.96-32.57,0-61.26,12.1-86.06,36.31-24.81,24.2-37.2,52.15-37.2,83.81,0,34.37,12.25,63.95,36.75,88.75,24.5,24.81,53.63,37.2,87.4,37.2s63.72-12.1,88.07-36.3c24.35-24.2,36.53-53.48,36.53-87.85Z',
              'm2251.01,374.66h77.99v208.42c0,64.25,28.24,96.37,84.71,96.37,25.1,0,44.97-8.59,59.61-25.77,14.64-17.18,21.96-40.71,21.96-70.59v-208.42h77.09v220.97c0,46.32-15.09,84.42-45.27,114.29-30.18,29.88-68.73,44.82-115.64,44.82s-86.5-14.94-116.09-44.82c-29.58-29.88-44.37-68.87-44.37-116.98v-218.28Z',
              'm2652.16,253.2c0-16.14,5.97-30.1,17.93-41.91,11.95-11.8,26.14-17.7,42.58-17.7s30.1,5.9,41.91,17.7c11.8,11.81,17.71,25.77,17.71,41.91s-5.9,30.48-17.71,42.13c-11.81,11.65-25.77,17.48-41.91,17.48s-30.63-5.83-42.58-17.48c-11.96-11.65-17.93-25.69-17.93-42.13Zm21.96,121.47h77.09v369.77h-77.09v-369.77Z',
              'm3090.96,168.49v78.89c-22.71-15.24-42.29-22.86-58.71-22.86-13.75,0-24.5,5.07-32.27,15.2-7.77,10.13-11.65,24.28-11.65,42.45v92.51h102.64v71.27h-102.64v298.51h-77.99v-298.51h-68.13v-71.27h68.13v-87.23c0-42.05,10.83-75.59,32.5-100.64,21.66-25.05,50.57-37.58,86.73-37.58,17.93,0,38.39,6.43,61.4,19.27Z',
              'm3149.67,374.66h88.47l134.13,200.88,92.73-200.88h80.45l-249.79,543.23h-81.44l122.1-264.5-186.64-278.73Z'
            ]
          : [])
      ]}
    />
  )

  return isLink ? <Link to={to || '/'}>{svg}</Link> : svg
}

export default Logo