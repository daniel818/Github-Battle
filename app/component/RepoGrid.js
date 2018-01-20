/**
 * Created by Daniel on 18/01/2018.
 */
import React from "react";

export default function({ repos }) {

    const renderList = repos.map((repo, i) => (
        <li className="popular-item"
            key={i}
        >
            <div className="popular-rank">#{i+1}</div>
            <ul className="popular-list-items">
                <li>
                    <img
                        className="avatar"
                        src={repo.owner.avatar_url}
                        alt={'Avatar for ' + repo.owner.login}
                    />
                </li>
                <li><a href={repo.html_url}>{repo.name}</a></li>
                <li>@{repo.owner.login}</li>
                <li>{repo.stargazers_count} stars</li>
            </ul>
        </li>
    ));

    return <ul className="popular-list">{renderList}</ul>;
}
