/**
 *  Сигнал компилятору чтобы он сгенерировал метаданные ('design:paramtypes') на основании параметров конструктора
 */
export function Injectable (): ClassDecorator {
    return (target: object) => {}
}