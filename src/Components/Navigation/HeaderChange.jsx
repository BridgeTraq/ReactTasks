import React from 'react'
import { useLocation } from 'react-router-dom';

export default function HeaderChange() {
    const { pathname } = useLocation()
    return (
        <div>
            {
                pathname === '/' ? <h1 className="text-2xl font-bold">Welcome back, Alesia🤟</h1>
                    : pathname === '/bookmarks' ? <h1 className="text-2xl font-bold">Bookmarks</h1>
                        : pathname === '/courses' ? <h1 className="text-2xl font-bold">Courses</h1>
                            : pathname === '/tutorials' ? <h1 className="text-2xl font-bold">Tutorials</h1>
                                : pathname === '/best' ? <h1 className="text-2xl font-bold">Best Practices</h1>
                                    : pathname === '/certifications' ? <h1 className="text-2xl font-bold">Certifications</h1>
                                        : pathname === '/resources' ? <h1 className="text-2xl font-bold">Resources</h1>
                                            : pathname === '/events' ? <h1 className="text-2xl font-bold">Events</h1>
                                                : pathname === '/community' ? <h1 className="text-2xl font-bold">Community</h1>
                                                    : pathname === '/setting' ? <h1 className="text-2xl font-bold">Setting</h1>
                                                        : pathname === '/help' ? <h1 className="text-2xl font-bold">Help Center</h1>
                                                            : null
            }
        </div>
    )
}
