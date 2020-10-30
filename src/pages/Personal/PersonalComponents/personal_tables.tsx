import React from "react";
import { GeneralTable } from "../../../components/Table/table";

export const MusicTable = () => (
  <GeneralTable
    head={["#", "Song", "Artist"]}
    rows={[
      [
        "1",
        <a href="https://www.youtube.com/watch?v=BM_sAgSiMrE">
          All of Beirut's Soiree de Poche
        </a>,
        "Beirut",
      ],
      [
        "2",
        <a href="https://www.youtube.com/watch?v=35iZSbmRie8">
          And Then I Knew
        </a>,
        "Pat Metheny Group",
      ],
      [
        "3",
        <a href="https://www.youtube.com/watch?v=LM9UUKwJ7Z8">
          Rye Lane Shuffle
        </a>,
        "Moses Boyd",
      ],
      [
        "4",
        <a href="https://www.youtube.com/watch?v=bOyu-LMseJw">
          Still Out There Running
        </a>,
        "Nathaniel Rateliff & The Night Sweats",
      ],
    ]}
  />
);

export const BookTable = () => (
  <GeneralTable
    head={["#", "Title", "Author"]}
    rows={[
      ["1", "Intuition Pumps and Other Tools for Thinking", "Daniel Dennett"],
      ["2", "The Blank Slate", "Steven Pinker"],
      ["3", "From A Logical Point of View", "W.V.O. Quine"],
    ]}
  />
);
