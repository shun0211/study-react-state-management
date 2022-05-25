import Link from 'next/link'
import React, { FC } from 'react'

type Props = {
  todoCount: number;
}

export const Header: FC<Props> = ({todoCount}) => {
  return (
    <div>
      <header>
        <nav>
          <h1>
            <Link href="/">
              <a href="">React状態管理</a>
            </Link>
          </h1>
          <Link href="/">
            <a>TODO一覧</a>
          </Link>
          <Link href="/add">
            <a>TODO追加</a>
          </Link>
        </nav>

        <h2>TODO: {todoCount}</h2>
      </header>
    </div>
  )
}
