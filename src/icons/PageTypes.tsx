import { createSvgIcon, SvgIconProps } from "@material-ui/core";
import React from "react";

const PageTypesIcons = createSvgIcon(
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M9 4.00195C8.44772 4.00195 8 4.44967 8 5.00195V19.002C8 19.5542 8.44772 20.002 9 20.002H17C17.5523 20.002 18 19.5542 18 19.002V7.58038C18 7.31516 17.8946 7.06081 17.7071 6.87327L15.1287 4.29485C14.9411 4.10731 14.6868 4.00195 14.4216 4.00195H9ZM6 5.00195C6 3.3451 7.34315 2.00195 9 2.00195H14.4216C15.2172 2.00195 15.9803 2.31802 16.5429 2.88063L19.1213 5.45906C19.6839 6.02167 20 6.78473 20 7.58038V19.002C20 20.6588 18.6569 22.002 17 22.002H9C7.34315 22.002 6 20.6588 6 19.002V5.00195ZM4 6.00195C4.55228 6.00195 5 6.44967 5 7.00195V20.002C5 20.5542 4.55228 21.002 4 21.002C3.44772 21.002 3 20.5542 3 20.002V7.00195C3 6.44967 3.44772 6.00195 4 6.00195ZM10.5 13.002C10.2239 13.002 10 13.2258 10 13.502V14.502C10 14.7781 10.2239 15.002 10.5 15.002H15.5C15.7761 15.002 16 14.7781 16 14.502V13.502C16 13.2258 15.7761 13.002 15.5 13.002H10.5ZM10 10.502C10 10.2258 10.2239 10.002 10.5 10.002H15.5C15.7761 10.002 16 10.2258 16 10.502V11.502C16 11.7781 15.7761 12.002 15.5 12.002H10.5C10.2239 12.002 10 11.7781 10 11.502V10.502ZM10.5 16.002C10.2239 16.002 10 16.2258 10 16.502V17.502C10 17.7781 10.2239 18.002 10.5 18.002H15.5C15.7761 18.002 16 17.7781 16 17.502V16.502C16 16.2258 15.7761 16.002 15.5 16.002H10.5Z"
    fill="currentColor"
  />,
  "PageTypes",
);

export default function PageTypes(props: SvgIconProps) {
  return <PageTypesIcons {...props} viewBox="0 0 24 25" />;
}
