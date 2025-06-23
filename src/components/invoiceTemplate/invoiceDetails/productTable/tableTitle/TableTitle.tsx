import css from "../ProductTable.module.css";

interface Props {
  title: string;
}

export function TableTitle({ title }: Props) {
  return (
    <>
      <div className={css.GridColumn}>
        <h3>{title}</h3>
      </div>
    </>
  );
}
