"use client";

import useWindowSize from "@rooks/use-window-size";
import { Filter } from "./filter/component/Filter";
import { Paginador } from "./paginador/component/Paginador";

export function ContainerFilter() {

    const { innerWidth } = useWindowSize();
    return <section>
        {
            innerWidth < 450 ? <><div className="flex w-full">
                <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center">
                    <Filter></Filter>
                </div>
            </div><br /><div className="flex w-full">
                    <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center">
                        <Paginador></Paginador>
                    </div>
                </div></>
                : <div>
                    <div className="flex w-full">
                        <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center"> <Filter></Filter></div>
                        <div className="divider divider-horizontal"></div>
                        <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center"><Paginador></Paginador></div>
                    </div>
                </div>
        }
    </section>
}