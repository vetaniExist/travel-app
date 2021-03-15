import React, {
  useState, useEffect, useRef, useCallback, useContext,
} from "react";
import magnifierIcon from "../../../../assets/icons/magnifier_icon.svg";
import { storeExample, ICountry } from "../../../../store.example";
import Context from "../../../Context";

const Search = () => {
  const [, setContext] = useContext(Context);
  const inputEl = useRef<HTMLInputElement | null>(null);
  const [seach, setSeach] = useState<string>("");
  const [founded, setFounded] = useState<ICountry | undefined>();

  const updateCountry = useCallback(() => {
  }, []);

  const updateSeach = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeach(e.target.value);

    if (e.target.value !== undefined) {
      const newCountry = storeExample.filter((item) => {
        // @ts-ignore
        const arrCountry = item.name.toLocaleLowerCase().includes(inputEl.current?.value.toLocaleLowerCase());
        // @ts-ignore
        const arrCapital = item.capital.toLocaleLowerCase().includes(inputEl.current?.value.toLocaleLowerCase());
        return arrCountry || arrCapital;
      });
      // @ts-ignore
      setFounded(newCountry);
    }
    updateCountry();
  };

  const handleKeypress = useCallback((e) => {
    const { key } = e;
    if (key === "Enter") {
      inputEl.current?.focus();
    }
  }, []);

  useEffect(() => {
    if (founded) {
      // @ts-ignore
      setContext(founded);
    }
  });

  useEffect(() => {
    inputEl.current?.focus();
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeypress);
    return function () {
      document.removeEventListener("keydown", handleKeypress);
    };
  }, []);

  return (
    <div className='searchContainer'>
      <input
        ref={inputEl}
        className='inputSearch'
        contentEditable='true'
        placeholder='Search'
        value={seach}
        onChange={updateSeach}
      />
      <button className='inputSearchIcon' onClick={() => inputEl.current?.focus()}>
        <img className='imgSearchIcon' src={magnifierIcon} />
      </button>
    </div>);
};

export default Search;