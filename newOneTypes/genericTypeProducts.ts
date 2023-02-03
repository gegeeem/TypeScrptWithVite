import { type } from "os";

interface Base {
  id: string;
  title: string;
}
interface GenericSelectedProps<TValue> {
  values: TValue[];
  changeValue: (value: TValue[]) => TValue;
}
interface EBook extends Base {
  author: string;
}
interface EMovie extends Base {
  dateRelased: string;
}
const programming: EBook = {
  id: "jhsjah",
  title: "You don t know Js",
  author: "Kyle",
};
const shortVideo: EMovie = {
  id: "sjsjja",
  title: "Vertigo",
  dateRelased: "02-05-1987",
};
function selectedProducts<TValue extends Base>({
  values,
  changeValue,
}: GenericSelectedProps<TValue>) {
  console.log(changeValue(values));
}
