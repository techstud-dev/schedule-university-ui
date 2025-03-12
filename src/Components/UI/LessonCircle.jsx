import ui from './styles/LessonCircle.module.css'

export const LessonCircle = (circleColor) => {
    return (
        <div
        className={ui.circle}
        style={{ backgroundColor: circleColor }}
      ></div>
    )
}