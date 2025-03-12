export const setColor = (type) => {
    const backgroundColor = {
      lecture: "#A8E0B8",
      practice: "#ADD8E6",
      lab: "#ed8ddb",
      exam: "#5a56c5",
      offset: "#64636e",
      consultation: "#78ecc9",
      other: "#FFD700",
    };
  
    const circleColors = {
      lecture: "#00f646",
      practice: "#00bfff",
      lab: "#ff00d0",
      exam: "#0800ff",
      offset: "#38383f",
      consultation: "#00ffb3",
      other: "#ffd900",
    };
  
    switch (type) {
      case "Лекция":
        return { back: backgroundColor.lecture, circle: circleColors.lecture };
      case "Практика":
        return { back: backgroundColor.practice, circle: circleColors.practice };
      case "Лабораторная":
        return { back: backgroundColor.lab, circle: circleColors.lab };
      case "Экзамен":
        return { back: backgroundColor.exam, circle: circleColors.exam };
      case "Зачёт":
        return { back: backgroundColor.offset, circle: circleColors.offset };
      case "Консультация":
        return {
          back: backgroundColor.consultation,
          circle: circleColors.consultation,
        };
      default:
        return { back: backgroundColor.other, circle: circleColors.other };
    }
  };