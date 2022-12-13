import {NgbDateParserFormatter, NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";

import {Injectable} from "@angular/core";

@Injectable()
export class NgbDateParserFormatterExtService extends NgbDateParserFormatter {
  private dateSeparatorChar: string = "-";

// dateFormat should be "yyyy-MM-dd" or "dd-MM-yyyy" with the valid separator.
  private dateFormat = `dd${this.dateSeparatorChar}MM${this.dateSeparatorChar}yyyy`;

  parse(value: string) {
    if (value === "") return null;

    const dateValues = value.split(this.dateSeparatorChar);

    if (dateValues.length !== 3) {
      return null;
    }

    let dayIndex: number;
    let yearIndex: number;

    if (this.dateFormat === "dd-MM-yyyy") {
      dayIndex = 0;
      yearIndex = 2;
    } else {
      dayIndex = 2;
      yearIndex = 0;
    }

    const year = Number(dateValues[yearIndex]);
    const month = Number(dateValues[1]);
    const day = Number(dateValues[dayIndex]);

    const date: NgbDateStruct = {
      year: year, month: month, day: day
    };

    return date;
  }

  format(date: NgbDateStruct): string {
    if (date === null) {
      return "";
    }

    const dayString: string = date.day < 10 ? `0${date.day}` : `${date.day}`;
    const monthString: string = date.month < 10 ? `0${date.month}` : `${date.month}`;
    const separator = this.dateSeparatorChar;

    return this.dateFormat === "dd-MM-yyyy"
      ? `${dayString}${separator}${monthString}${separator}${date.year}`
      : `${date.year}${separator}${monthString}${separator}${dayString}`;
  }
}
