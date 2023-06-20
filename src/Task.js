import React from "react";

import { differenceInDays, formatDistanceToNow } from "date-fns";
import tr from "date-fns/locale/tr";

const Task = ({ taskObj, onComplete }) => {
  const distance = formatDistanceToNow(new Date(taskObj.deadline), {
    addSuffix: true,
    locale: tr,
  });
  const isDeadlineClose =
    differenceInDays(new Date(taskObj.deadline), new Date()) <= 3;

  return (
    <div className="p-6 bg-[#fff] rounded leading-normal mt-4 shadow-md">
      <h3 className="text-lg text-taskHeader">{taskObj.title}</h3>
      <div className="text-sm pt-1">
        son teslim:{" "}
        <span
          className={
            isDeadlineClose
              ? "rounded-sm inline-block py-[3px] px-2 bg-[#ffd9d4]"
              : "rounded-sm inline-block py-[3px] px-2 bg-[#d4d7ff]"
          }
        >
          {distance}
        </span>
      </div>
      <p className="py-2 pl-0 pr-3 text-sm text-description">
        {taskObj.description}
      </p>
      <div>
        {taskObj.people.map(p => (
          <span
            className="inline-block py-[5] px-3 text-sm border border-solid border-[#ccc] mr-1 mb-1.5 rounded-[30px]"
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button
          className="block py-2 px-3 ml-auto bg-button shadow-[0_4px_5px_0px_rgba(0 0 0 / 5%)] rounded-[3px] border-0 cursor-pointer  "
          onClick={() => onComplete(taskObj.id)}
        >
          Tamamlandı
        </button>
      )}
    </div>
  );
};

export default Task;
