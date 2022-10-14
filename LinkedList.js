class LinkedList {

  constructor() {
    this.first = null;
  }

  /**
   * Agrega un Node al final de la lista.
   * @method add
   * @param {Node} node - Instancia de Node.
   */
  add(node) {
    if (!this.first) {
      this.first = node;
    } else if (!this.first.next) {
      this.first.next = node;
    } else {
      this.#getLastNodeWithRecursion().next = node;
    }
  }

  /**
   * Agrega un Node al inicio de la lista.
   * @method addFirst
   * @param {Node} node - Instancia de Node.
   */
  addFirst(node) {
    node.next = this.first;
    this.first = node;
  }

  /**
   * Elimina y retorna el primer Node de la lista.
   * @method shift
   * @returns {Node} Instancia de Node.
   */
  shift() {
    let aux = this.first;
    this.first = this.first.next;
    return aux;
  }

  /**
   * Elimina y retorna el ultimo nodo de la lista.
   * @method pop
   * @returns {Node} Instancia de Node.
   */
  pop() {
    if (!this.first.next) {
      let aux = this.first;
      this.first = null;
      return aux
    }

    //***Sin recursividad */
    // let node = this.first;
    // while(node.next.next != null){
    //   node = node.next;
    // }
    // let aux = node.next
    // node.next = null;
    // return aux;

    //***Con recursividad */
    return this.#popRecursion();
  }

  #popRecursion(nodo = this.first) {
    if (nodo.next.next != null) {
      return this.#popRecursion(nodo.next);
    }
    let aux = nodo.next;
    nodo.next = null;
    return aux;
  }

  /**
   * Retorna una lista de todos los Node.
   * @getter list
   * @returns {String} Lista de nodos.
   */
  get list() {
    if (!this.first) return '';
    return this.#listRecursion();
  }

  #listRecursion(str = '', nodo = this.first) {
    str += `${nodo.number} `;
    if (nodo.next) {
      return this.#listRecursion(str, nodo.next);
    } else {
      return str;
    }
  }

  /**
   * Retorna una lista en reversa de todos los Node.
   * @getter reverseList
   * @returns {String} Lista de nodos.
   */
  get reverseList() {
    if (!this.first) return '';
    return this.#reverseListRecursion();
  }

  #reverseListRecursion(node = this.first) {
    if (!node.next) return node.number;
    /**
     * como el ultimo ya retornó llega al final y suma su numero 
     * despues de este y como entrando a este if reotrna algo y el
     * que ejecuta la función antes no tiene su next en null hace esto mismo.
     */
    return `${this.#reverseListRecursion(node.next)} ${node.number}`;
  }

  #getLastNodeWithRecursion(nodo = this.first) {
    if (nodo.next) return this.#getLastNodeWithRecursion(nodo.next);
    return nodo;
  }
}

module.exports = LinkedList;