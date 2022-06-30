import {
  Lucide,
  Tippy,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  Litepicker,
  TinySlider,
} from "@/base-components";
import { useRef, useState } from "react";
import ReportLineChart from "@/components/report-line-chart/Main";


function Main() {
  const [salesReportFilter, setSalesReportFilter] = useState();
  const importantNotesRef = useRef();
  const prevImportantNotes = () => {
    importantNotesRef.current.tns.goTo("prev");
  };
  const nextImportantNotes = () => {
    importantNotesRef.current.tns.goTo("next");
  };
  return (
    <>
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Inicio</h2>
      </div>
      {/* BEGIN: Page Layout */}
      {/* BEGIN: Reporte General*/}
        <div className="col-span-12 mt-8">
          <div className="intro-y flex items-center h-10">
            <h2 className="text-lg font-medium mr-auto">Reporte General</h2>
            <a href="" className="ml-auto flex items-center text-primary">
                <Lucide icon="RefreshCcw" className="w-4 h-4 mr-3" /> Recargar
              </a>
          </div>
          <div className="grid grid-cols-12 gap-6 mt-5">
              <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                <div className="report-box zoom-in">
                  <div className="box p-5">
                    <div className="flex">
                      <Lucide
                        icon="Users"
                        className="report-box__icon text-primary"
                      />
                      <div className="ml-auto">
                        <Tippy
                          tag="div"
                          className="report-box__indicator bg-success cursor-pointer"
                          content="33% usuarios más que el mes pasado"
                        >
                          33%
                          <Lucide icon="ChevronUp" className="w-4 h-4 ml-0.5" />
                        </Tippy>
                      </div>
                    </div>
                    <div className="text-3xl font-medium leading-8 mt-6">
                      27.661
                    </div>
                    <div className="text-base text-slate-500 mt-1">
                     Afiliados
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                <div className="report-box zoom-in">
                  <div className="box p-5">
                    <div className="flex">
                      <Lucide
                        icon="BarChart2"
                        className="report-box__icon text-pending"
                      />
                      <div className="ml-auto">
                        <Tippy
                          tag="div"
                          className="report-box__indicator bg-danger cursor-pointer"
                          content="2% menos que el mes anterior"
                        >
                          2%
                          <Lucide
                            icon="ChevronDown"
                            className="w-4 h-4 ml-0.5"
                          />
                        </Tippy>
                      </div>
                    </div>
                    <div className="text-3xl font-medium leading-8 mt-6">
                      3.721
                    </div>
                    <div className="text-base text-slate-500 mt-1">
                      Solicitudes entrantes
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                <div className="report-box zoom-in">
                  <div className="box p-5">
                    <div className="flex">
                      <Lucide
                        icon="Check"
                        className="report-box__icon text-warning"
                      />
                      <div className="ml-auto">
                        <Tippy
                          tag="div"
                          className="report-box__indicator bg-success cursor-pointer"
                          content="12% más que el mes anterior"
                        >
                          12%{" "}
                          <Lucide icon="ChevronUp" className="w-4 h-4 ml-0.5" />
                        </Tippy>
                      </div>
                    </div>
                    <div className="text-3xl font-medium leading-8 mt-6">
                      2.149
                    </div>
                    <div className="text-base text-slate-500 mt-1">
                      Solicitudes aprobadas
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                <div className="report-box zoom-in">
                  <div className="box p-5">
                    <div className="flex">
                      <Lucide
                        icon="User"
                        className="report-box__icon text-success"
                      />
                      <div className="ml-auto">
                        <Tippy
                          tag="div"
                          className="report-box__indicator bg-success cursor-pointer"
                          content="22% Higher than last month"
                        >
                          22%{" "}
                          <Lucide icon="ChevronUp" className="w-4 h-4 ml-0.5" />
                        </Tippy>
                      </div>
                    </div>
                    <div className="text-3xl font-medium leading-8 mt-6">
                      350
                    </div>
                    <div className="text-base text-slate-500 mt-1">
                      Proveedores
                    </div>
                  </div>
                </div>
              </div>
            </div>

        
        </div>

      {/* END: Reporte General*/}

      {/* BEGIN: Sales Report */}
      <div className="col-span-12 lg:col-span-6 mt-8">
            <div className="intro-y block sm:flex items-center h-10">
              <h2 className="text-lg font-medium truncate mr-5">
                Reporte de ventas
              </h2>
              <div className="sm:ml-auto mt-3 sm:mt-0 relative text-slate-500">
                <Lucide
                  icon="Calendar"
                  className="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0"
                />
                <Litepicker
                  value={salesReportFilter}
                  onChange={setSalesReportFilter}
                  options={{
                    autoApply: false,
                    singleMode: false,
                    numberOfColumns: 2,
                    numberOfMonths: 2,
                    showWeekNumbers: true,
                    dropdowns: {
                      minYear: 1990,
                      maxYear: null,
                      months: true,
                      years: true,
                    },
                  }}
                  className="form-control sm:w-56 box pl-10"
                />
              </div>
            </div>
            <div className="intro-y box p-5 mt-12 sm:mt-5">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="flex">
                  <div>
                    <div className="text-primary dark:text-slate-300 text-lg xl:text-xl font-medium">
                      $15.000.000
                    </div>
                    <div className="mt-0.5 text-slate-500">Este mes</div>
                  </div>
                  <div className="w-px h-12 border border-r border-dashed border-slate-200 dark:border-darkmode-300 mx-4 xl:mx-5"></div>
                  <div>
                    <div className="text-slate-500 text-lg xl:text-xl font-medium">
                      $10.000.000
                    </div>
                    <div className="mt-0.5 text-slate-500">Mes pasado</div>
                  </div>
                </div>
                <Dropdown className="md:ml-auto mt-5 md:mt-0">
                  <DropdownToggle className="btn btn-outline-secondary font-normal">
                    Filtrar por categoría
                    <Lucide icon="ChevronDown" className="w-4 h-4 ml-2" />
                  </DropdownToggle>
                  <DropdownMenu className="w-40">
                    <DropdownContent className="overflow-y-auto h-32">
                      <DropdownItem>Protesis</DropdownItem>
                      <DropdownItem>Ortesis</DropdownItem>
                      <DropdownItem>Descartables</DropdownItem>
                      <DropdownItem>Insumos</DropdownItem>
                      <DropdownItem>Post-operatorio</DropdownItem>
                    </DropdownContent>
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div className="report-chart">
                <ReportLineChart height={275} className="mt-6 -mb-6" />
              </div>
            </div>
          </div>
          {/* END: Sales Report */}
            {/* BEGIN: Important Notes */}
            <div className="col-span-12 md:col-span-6 xl:col-span-12 xl:col-start-1 xl:row-start-1 2xl:col-start-auto 2xl:row-start-auto mt-3">
              <div className="intro-x flex items-center h-10">
                <h2 className="text-lg font-medium truncate mr-auto">
                 Notas importantes
                </h2>
                <button
                  data-carousel="important-notes"
                  data-target="prev"
                  className="tiny-slider-navigator btn px-2 border-slate-300 text-slate-600 dark:text-slate-300 mr-2"
                  onClick={prevImportantNotes}
                >
                  <Lucide icon="ChevronLeft" className="w-4 h-4" />
                </button>
                <button
                  data-carousel="important-notes"
                  data-target="next"
                  className="tiny-slider-navigator btn px-2 border-slate-300 text-slate-600 dark:text-slate-300 mr-2"
                  onClick={nextImportantNotes}
                >
                  <Lucide icon="ChevronRight" className="w-4 h-4" />
                </button>
              </div>
              <div className="mt-5 intro-x">
                <div className="box zoom-in">
                  <TinySlider
                    getRef={(el) => {
                      importantNotesRef.current = el;
                    }}
                  >
                    <div className="p-5">
                      <div className="text-base font-medium truncate">
                        Lorem Ipsum is simply dummy text
                      </div>
                      <div className="text-slate-400 mt-1">Hace 20 horas</div>
                      <div className="text-slate-500 text-justify mt-1">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </div>
                      <div className="font-medium flex mt-5">
                        <button
                          type="button"
                          className="btn btn-secondary py-1 px-2"
                        >
                         Ver notas
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary py-1 px-2 ml-auto"
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="text-base font-medium truncate">
                        Lorem Ipsum is simply dummy text
                      </div>
                      <div className="text-slate-400 mt-1">Hace 20 horas</div>
                      <div className="text-slate-500 text-justify mt-1">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </div>
                      <div className="font-medium flex mt-5">
                        <button
                          type="button"
                          className="btn btn-secondary py-1 px-2"
                        >
                         Ver notas
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary py-1 px-2 ml-auto"
                        >
                          Dismiss
                        </button>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="text-base font-medium truncate">
                        Lorem Ipsum is simply dummy text
                      </div>
                      <div className="text-slate-400 mt-1">Hace 20 horas</div>
                      <div className="text-slate-500 text-justify mt-1">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </div>
                      <div className="font-medium flex mt-5">
                        <button
                          type="button"
                          className="btn btn-secondary py-1 px-2"
                        >
                         Ver notas
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary py-1 px-2 ml-auto"
                        >
                          Dismiss
                        </button>
                      </div>
                    </div>
                  </TinySlider>
                </div>
              </div>
            </div>
            {/* END: Important Notes */}
      
      {/* END: Page Layout */}
    </>
  );
}

export default Main;
