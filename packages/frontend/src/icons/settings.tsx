import React from "react";
import type { SVGIcon } from "./types";

const Settings = (props: SVGIcon) => (
    <svg
        width="33"
        height="33"
        viewBox="0 0 33 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M13.6484 6.13708L14.1227 6.29519V6.29519L13.6484 6.13708ZM12.9424 8.25503L13.1477 8.71093L13.3475 8.62098L13.4167 8.41314L12.9424 8.25503ZM11.3135 9.19714L11.2133 9.68699L11.4283 9.73099L11.6062 9.60253L11.3135 9.19714ZM9.12418 8.74913L9.22442 8.25928L9.12418 8.74913ZM6.99117 9.70852L6.55816 9.45852L6.99117 9.70852ZM5.76602 11.8305L6.19903 12.0805L5.76602 11.8305ZM6.00167 14.1575L6.37577 13.8257H6.37577L6.00167 14.1575ZM7.48432 15.8295L7.98184 15.8792L8.00361 15.6615L7.85842 15.4978L7.48432 15.8295ZM7.48432 17.7096L7.85842 18.0413L8.00361 17.8776L7.98184 17.6598L7.48432 17.7096ZM6.00166 19.3816L6.37577 19.7133H6.37577L6.00166 19.3816ZM5.76602 21.7085L6.19903 21.4585H6.19903L5.76602 21.7085ZM6.99117 23.8305L6.55815 24.0805L6.99117 23.8305ZM9.12418 24.7899L9.02394 24.3001H9.02394L9.12418 24.7899ZM11.3135 24.3419L11.6062 23.9365L11.4283 23.8081L11.2133 23.8521L11.3135 24.3419ZM12.9424 25.284L13.4167 25.1259L13.3475 24.9181L13.1477 24.8281L12.9424 25.284ZM13.6484 27.402L14.1227 27.2439L13.6484 27.402ZM19.8934 27.402L19.4191 27.2439L19.8934 27.402ZM20.5994 25.284L20.3941 24.8281L20.1943 24.9181L20.1251 25.1259L20.5994 25.284ZM22.2283 24.3419L22.3285 23.8521L22.1135 23.8081L21.9356 23.9365L22.2283 24.3419ZM24.4176 24.7899L24.5179 24.3001L24.4176 24.7899ZM26.5506 23.8305L26.1176 23.5805L26.5506 23.8305ZM27.7758 21.7085L27.3428 21.4585L27.7758 21.7085ZM27.5401 19.3816L27.9142 19.0498H27.9142L27.5401 19.3816ZM26.0575 17.7096L25.56 17.6598L25.5382 17.8776L25.6834 18.0413L26.0575 17.7096ZM26.0575 15.8295L25.6834 15.4977L25.5382 15.6615L25.56 15.8792L26.0575 15.8295ZM27.5401 14.1575L27.166 13.8257V13.8257L27.5401 14.1575ZM27.7758 11.8305L28.2088 11.5805V11.5805L27.7758 11.8305ZM26.5506 9.70852L26.9836 9.45852V9.45852L26.5506 9.70852ZM24.4176 8.74913L24.5179 9.23898L24.4176 8.74913ZM22.2283 9.19714L21.9356 9.60253L22.1135 9.73099L22.3285 9.68699L22.2283 9.19714ZM20.5994 8.25503L20.1251 8.41314L20.1943 8.62097L20.3941 8.71093L20.5994 8.25503ZM19.8934 6.13708L19.4191 6.29519L19.8934 6.13708ZM14.1227 6.29519C14.3269 5.68268 14.9001 5.26953 15.5458 5.26953V4.26953C14.4697 4.26953 13.5143 4.95811 13.174 5.97896L14.1227 6.29519ZM13.4167 8.41314L14.1227 6.29519L13.174 5.97896L12.4681 8.09692L13.4167 8.41314ZM11.6062 9.60253C12.0862 9.25598 12.6023 8.95655 13.1477 8.71093L12.7371 7.79913C12.1296 8.07271 11.555 8.40611 11.0209 8.79175L11.6062 9.60253ZM9.02394 9.23898L11.2133 9.68699L11.4138 8.70729L9.22442 8.25928L9.02394 9.23898ZM7.42418 9.95852C7.747 9.39938 8.3914 9.10954 9.02394 9.23898L9.22442 8.25928C8.17019 8.04355 7.09619 8.52661 6.55816 9.45852L7.42418 9.95852ZM6.19903 12.0805L7.42418 9.95852L6.55816 9.45852L5.33301 11.5805L6.19903 12.0805ZM6.37577 13.8257C5.9474 13.3427 5.87621 12.6397 6.19903 12.0805L5.33301 11.5805C4.79497 12.5125 4.91362 13.6841 5.62756 14.4892L6.37577 13.8257ZM7.85842 15.4978L6.37577 13.8257L5.62756 14.4892L7.11022 16.1612L7.85842 15.4978ZM7.93757 16.7695C7.93757 16.4689 7.95257 16.1719 7.98184 15.8792L6.9868 15.7797C6.95423 16.1054 6.93757 16.4356 6.93757 16.7695H7.93757ZM7.98184 17.6598C7.95257 17.3672 7.93757 17.0702 7.93757 16.7695H6.93757C6.93757 17.1035 6.95423 17.4337 6.9868 17.7593L7.98184 17.6598ZM6.37577 19.7133L7.85842 18.0413L7.11022 17.3778L5.62756 19.0498L6.37577 19.7133ZM6.19903 21.4585C5.87621 20.8994 5.9474 20.1964 6.37577 19.7133L5.62756 19.0498C4.91362 19.855 4.79497 21.0266 5.33301 21.9585L6.19903 21.4585ZM7.42418 23.5805L6.19903 21.4585L5.33301 21.9585L6.55815 24.0805L7.42418 23.5805ZM9.02394 24.3001C8.3914 24.4295 7.747 24.1397 7.42418 23.5805L6.55815 24.0805C7.09619 25.0125 8.17019 25.4955 9.22442 25.2798L9.02394 24.3001ZM11.2133 23.8521L9.02394 24.3001L9.22442 25.2798L11.4138 24.8318L11.2133 23.8521ZM13.1477 24.8281C12.6023 24.5825 12.0862 24.2831 11.6062 23.9365L11.0209 24.7473C11.555 25.133 12.1296 25.4664 12.7371 25.7399L13.1477 24.8281ZM14.1227 27.2439L13.4167 25.1259L12.4681 25.4421L13.174 27.5601L14.1227 27.2439ZM15.5458 28.2695C14.9001 28.2695 14.3269 27.8564 14.1227 27.2439L13.174 27.5601C13.5143 28.581 14.4697 29.2695 15.5458 29.2695V28.2695ZM17.996 28.2695H15.5458V29.2695H17.996V28.2695ZM19.4191 27.2439C19.2149 27.8564 18.6417 28.2695 17.996 28.2695V29.2695C19.0721 29.2695 20.0275 28.581 20.3678 27.5601L19.4191 27.2439ZM20.1251 25.1259L19.4191 27.2439L20.3678 27.5601L21.0737 25.4421L20.1251 25.1259ZM21.9356 23.9365C21.4556 24.2831 20.9395 24.5825 20.3941 24.8281L20.8047 25.7399C21.4122 25.4664 21.9868 25.133 22.5209 24.7473L21.9356 23.9365ZM24.5179 24.3001L22.3285 23.8521L22.128 24.8318L24.3174 25.2798L24.5179 24.3001ZM26.1176 23.5805C25.7948 24.1397 25.1504 24.4295 24.5179 24.3001L24.3174 25.2798C25.3716 25.4955 26.4456 25.0124 26.9836 24.0805L26.1176 23.5805ZM27.3428 21.4585L26.1176 23.5805L26.9836 24.0805L28.2088 21.9585L27.3428 21.4585ZM27.166 19.7133C27.5944 20.1964 27.6656 20.8994 27.3428 21.4585L28.2088 21.9585C28.7468 21.0266 28.6282 19.855 27.9142 19.0498L27.166 19.7133ZM25.6834 18.0413L27.166 19.7133L27.9142 19.0498L26.4316 17.3778L25.6834 18.0413ZM25.6042 16.7695C25.6042 17.0702 25.5892 17.3672 25.56 17.6598L26.555 17.7593C26.5876 17.4337 26.6042 17.1035 26.6042 16.7695H25.6042ZM25.56 15.8792C25.5892 16.1719 25.6042 16.4689 25.6042 16.7695H26.6042C26.6042 16.4356 26.5876 16.1054 26.555 15.7797L25.56 15.8792ZM27.166 13.8257L25.6834 15.4977L26.4316 16.1612L27.9142 14.4892L27.166 13.8257ZM27.3428 12.0805C27.6656 12.6397 27.5944 13.3427 27.166 13.8257L27.9142 14.4892C28.6282 13.6841 28.7468 12.5124 28.2088 11.5805L27.3428 12.0805ZM26.1176 9.95852L27.3428 12.0805L28.2088 11.5805L26.9836 9.45852L26.1176 9.95852ZM24.5179 9.23898C25.1504 9.10954 25.7948 9.39938 26.1176 9.95852L26.9836 9.45852C26.4456 8.52661 25.3716 8.04355 24.3174 8.25928L24.5179 9.23898ZM22.3285 9.68699L24.5179 9.23898L24.3174 8.25928L22.128 8.70729L22.3285 9.68699ZM20.3941 8.71093C20.9395 8.95655 21.4556 9.25598 21.9356 9.60253L22.5209 8.79175C21.9868 8.40611 21.4122 8.07271 20.8047 7.79913L20.3941 8.71093ZM19.4191 6.29519L20.1251 8.41314L21.0737 8.09692L20.3678 5.97896L19.4191 6.29519ZM17.996 5.26953C18.6417 5.26953 19.2149 5.68268 19.4191 6.29519L20.3678 5.97896C20.0275 4.95811 19.0721 4.26953 17.996 4.26953V5.26953ZM15.5458 5.26953H17.996V4.26953H15.5458V5.26953Z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.7708 18.1032C17.5072 18.1032 18.1042 17.5062 18.1042 16.7699C18.1042 16.0335 17.5072 15.4365 16.7708 15.4365C16.0345 15.4365 15.4375 16.0335 15.4375 16.7699C15.4375 17.5062 16.0345 18.1032 16.7708 18.1032Z"
            stroke="currentColor"
        />
    </svg>
);

export default Settings;
