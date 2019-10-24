array = [3, 2, 1, 154, 6, 567, 34, 43, 457, 675, 3253, 45, -3]

console.log(array)


for (i = 0; i < array.length - 1; i++) {

    if (array[i] > array[i + 1]) {

        x = array[i]
        array[i] = array[i + 1]
        array[i + 1] = x

        while (i > 0 && array[i] < array[i - 1]) {

            x = array[i]
            array[i] = array[i - 1]
            array[i - 1] = x

            i--

        }
    }


}

console.log(array)





