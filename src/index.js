module.exports = function toReadable(number) {
    if (number === 0) return "zero";
    const data = [
        [
            "",
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven",
            "eight",
            "nine",
            "ten",
            "eleven",
            "twelve",
            "thirteen",
            "fourteen",
            "fifteen",
            "sixteen",
            "seventeen",
            "eighteen",
            "nineteen",
        ],
        [
            "",
            "ten",
            "twenty",
            "thirty",
            "forty",
            "fifty",
            "sixty",
            "seventy",
            "eighty",
            "ninety",
        ],
        ["hundred", "thousand"],
    ];

    let decimal = number % 100;
    decimal =
        decimal < 20
            ? data[0][decimal]
            : data[1][Math.floor(decimal / 10)] +
              (decimal % 10 === 0 && decimal
                  ? ""
                  : " " + data[0][decimal % 10]);

    let hundreds = Math.floor(number / 100);
    if (number < 100) return decimal;
    hundreds = hundreds
        .toString()
        .split("")
        .map((c) => Number(c))
        .map((n, i) => {
            return data[0][n] + " " + data[2][number.toString().length - 3 - i];
        })
        .filter((c) => c != "")
        .join(" ");
    return hundreds + (decimal !== "" ? " " + decimal : "");
};
