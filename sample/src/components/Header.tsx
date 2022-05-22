import Link from 'next/link'
import React, { FC } from 'react'

export const Header: FC = () => {
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

        <h2>TODO: 2件</h2>
      </header>
    </div>
  )
}
