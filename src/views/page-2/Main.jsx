import { ClassicEditor, TomSelect } from "@/base-components";
import { useState } from "react";



function Main() {
  const [categories, setCategories] = useState([1, 3]);
  const editorConfig = {
    toolbar: {
      items: ["bold", "italic", "link"],
    },
  };
  const [editorData, setEditorData] = useState("<p>Content of the editor.</p>");


  return (


    <>
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Crear solicitud</h2>
      </div>
      {/* BEGIN: Page Layout */}
      {/* BEGIN: Form Layout */}
      <div className="intro-y box p-5">
            <div>
              <label htmlFor="crud-form-1" className="form-label">
                Nombre Afiliado
              </label>
              <input
                id="crud-form-1"
                type="text"
                className="form-control w-full"
                placeholder="Input text"
              />
            </div>
            <div className="mt-3">
              <label htmlFor="crud-form-2" className="form-label">
                Artículos
              </label>
              <TomSelect
                id="crud-form-2"
                value={categories}
                onChange={setCategories}
                className="w-full"
                multiple
              >
                <option value="1">Protesis</option>
                <option value="2">Ortesis</option>
                <option value="3">Descartables</option>
                <option value="4">Insumos</option>
              </TomSelect>
            </div>
            <div className="mt-3">
              <label htmlFor="crud-form-3" className="form-label">
                DNI
              </label>
              <div className="input-group">
                <input
                  id="crud-form-3"
                  type="text"
                  className="form-control"
                  placeholder="DNI"
                  aria-describedby="input-group-1"
                />
                <div id="input-group-1" className="input-group-text">
                
                </div>
              </div>
            </div>
            <div className="mt-3">
              <label htmlFor="crud-form-4" className="form-label">
                N° Afiliado
              </label>
              <div className="input-group">
                <input
                  id="crud-form-4"
                  type="text"
                  className="form-control"
                  placeholder="N° Afiliado"
                  aria-describedby="input-group-2"
                />
                <div id="input-group-2" className="input-group-text">
                
                </div>
              </div>
            </div>
            <div className="mt-3">
              <label className="form-label">N° Solicitud</label>
              <div className="sm:grid grid-cols-3 gap-2">
                <div className="input-group">
                  <div id="input-group-3" className="input-group-text mt-4">
                    Solicitud nro
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Completar con número de solicitud"
                    aria-describedby="input-group-3"
                  />
                </div>
                <div className="input-group mt-2 sm:mt-0">
                  <div id="input-group-4" className="input-group-text mt-4">
                    Médico solicitante
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Completar con el nombre del médico"
                    aria-describedby="input-group-4"
                  />
                </div>
                <div className="input-group mt-2 sm:mt-0">
                  <div id="input-group-5" className="input-group-text mt-4">
                    Institución
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre de Clínica/Sanatorio/Hospital"
                    aria-describedby="input-group-5"
                  />
                </div>
              </div>
            </div>
            <div className="mt-3">
              <label>Adjudicado (recuerde que esto debe hacerlo solo personal autorizado)</label>
              <div className="form-switch mt-2">
                <input type="checkbox" className="form-check-input" />
                <label className="mr-8"> Este usuario ha sido adjudicado </label>
              </div>
            </div>
            <div className="mt-3">
              <label>Observación</label>
              <div className="mt-2">
                <ClassicEditor
                  value="Completar diagnóstico"
                  onChange={setEditorData}
                  config={editorConfig}
                />
              </div>
            </div>
            <div className="text-right mt-5">
              <button
                type="button"
                className="btn btn-outline-secondary w-24 mr-1"
              >
                Cancelar
              </button>
              <button type="button" className="btn btn-primary w-24">
                Guardar
              </button>
            </div>
          </div>
          {/* END: Form Layout */}
      {/* END: Page Layout */}
    </>
  );
}

export default Main;
