import Link from "next/link";
import React from "react"

export function BottomLink({
    linktext,
    text,
    url,
}:{
    text: string;
    linktext: string;
    url: string;
}){
    return(
          <p className="text-sm text-gray-600">
            {text}{" "}
            <Link href={url} className="font-medium text-primary hover:underline">
              {linktext}
            </Link>
          </p>
    )
}