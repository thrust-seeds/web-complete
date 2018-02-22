/**
 * @project Thrust
 * @author nery
 */

declare var config: {
    rootPath: string;
    cacheScript: boolean;
    reloadPlatform: boolean;
    developmentMode: boolean;
    database: object;
}

declare var Java: {
    type: (java_class: string) => any;
}

declare namespace java.io {
    var File: any;
}

declare namespace java.lang {
    var String: any;
}

declare namespace java.nio.file {
    var Files: {
        readAllBytes: (path: any) => any;
    };
}

declare namespace java.nio.charset {
    var Charset: any;
    var StandardCharsets: any;
}

declare namespace java.util {
    var Scanner: any;
}

/**
 * Controla cache dos scripts
 *
 */
declare var scripts: {};


/**
 * Carrega um *m&oacute;dulo* Javascript disponibilizando no contexto somente as
 * vari&aacute;veis e funções que foram exportadas.
 * @param {string} filename O nome do arquivo (m&oacute;dulo) a ser importado.
 * @returns {Object}
 */
declare function require(filename: string): any;

/**
* Usado para carregar um jar para o Classpath da aplicação.
* @param {String} jarName - Nome do jar a ser carregado.
*   Caso seja passado um caminho relativo (./ ou ../) o módulo será carregado
*   com caminho relativo ao script que originou a chamada.
*
*   Caso seja passado um nome, assumimos que é um require de dependencia de um bitcode,
*   sendo assim pesquisamos pelos jars dos bitcodes instalados.
*
* @code loadJar('./vendor/meuJar.jar')
*/
declare function loadjar(filename: string): void;

/**
* Usado para pegar o JSON de configuração (config.json)
* @code getConfig().minhaVar
*/
declare function getConfig(): object;

declare function print(...args: any[]): void;
declare function show(...args: any[]): void;
declare var console: {
    debug: (...args: any[]) => void;
    error: (...args: any[]) => void;
    log: (...args: any[]) => void;
    trace: (...args: any[]) => void;
    warn: (...args: any[]) => void;
}

/**
 * Agrupa funcionalidades relativas a file system.
 * Módulo de manipulação de arquivos.
 */
declare namespace fs {
    /**
     * @desc Verifica se o arquivo *fileName* existe.
     * @param {string} fileName - caminho absoluto ou relativo do arquivo que se deseja verificar a existência.
     * @returns {boolean} - *true* if the file exists; *false* if the file does not exist or its existence cannot be determined.
     */
    export function exists(fileName: string): boolean;
    export function readAll(fileName: string, charset: string): string;
    export function readJson(fileName: string, charset: string): object;
    export function lines(fileObject: string | File | InputStream, charset: string): Stream<String>;
    export function saveToFile(fileName: string, content: string): void;
}

interface RequestWrapper {
    queryString: string;
    contentType: string;
    method: string;
    pathInfo: string;
    requestURI: string;
    session: object;
    scheme: string;
    host: string;
    port: string;
    contextPath: string;
    rest: string;
    getHeader: (name: string) => string;
}

interface ResponseWrapper {
    clean: void;
    getContentType: () => string;
    setContentType: (type: string) => void;
    getCharacterEncoding: () => string;
    setCharacterEncoding: (charset: string) => void;
    write: (content: string) => void;
    addHeader: (name: string, value: string) => void;
    getStatus: () => number;
    setStatus: (status: number) => void;
    getContentLength: () => number;
    setContentLength: (length: number) => void;
    json: (data: object, statusCode: number, headers: object) => void;
    error: {
        json: (message: string, statusCode: number, headers: object) => void;
    }
}



/**
 * Agrupa funcionalidades relativas a comunica&ccedil;&atilde;o http
 * entre o browser e o servidor.
 */
declare var http: {
    endpoints: object;
    vroutes: object;
    middlewares: any[];
    mapEndPoint: (virtual: any, realRoute: any) => void;
    addRoute: (virtualRoute: any, realRoute: any) => void;
    addMiddleware: (middleware: any) => void;
    mimes: string[];
    serializeParams: any;
    parseParams: any;
    // Response: (javaResponse: any) => void;
    // Request: (javaRequest: any) => void;  
    Response: ResponseWrapper;
    Request: RequestWrapper
}

interface ObjectRequest {
    params: (params: object) => ObjectRequest;
    property: (property: string, value: string) => ObjectRequest;
    charset: (value: string) => ObjectRequest;
    contentType: (value: string) => ObjectRequest;
    fetch: () => string;
}

/**
 * Object que implementea a execução de chamadas HTTP do lado do cliente 
 * a um servidor ( endereço URL) atrvés dos métodos GET, PUT, DELETE e POST.
 */
declare var HTTPClient: {
    get: (url: string, params: object) => ObjectRequest;
    post: (url: string, params: object) => ObjectRequest;
    put: (url: string, params: object) => ObjectRequest;
    delete: (url: string, params: object) => ObjectRequest;
}


