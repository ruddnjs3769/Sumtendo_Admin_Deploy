import axios from 'axios'

const api = axios.create({
  baseURL: 'https://asia-northeast3-heropy-api.cloudfunctions.net',
  headers: {
    'Content-Type': 'application/json',
    masterKey: 'true',
    apikey: 'KDT5_nREmPe9B',
    username: 'KDT5_Team6',
  },
})

export const getProducts = async () => {
  try {
    const { data } = await api('/api/products', {
      method: 'GET',
    })
    return data
  } catch (error) {
    console.error(error)
    return []
  }
}

export const updateProduct = async (id: string, body: RequestBody) => {
  try {
    await api(`/api/products/${id}`, {
      method: 'PUT',
      data: body,
    })
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}

export const deleteProduct = async (id: string) => {
  try {
    const { data: isDeleted } = await api(`/api/products/${id}`, {
      method: 'DELETE',
    })
    return isDeleted as boolean
  } catch (error) {
    console.error(error)
    return false
  }
}

export interface RequestBody {
  title?: string // 제품 이름
  price?: number // 제품 가격
  description?: string // 제품 상세 설명
  tags?: string[] // 제품 태그
  thumbnailBase64?: string // 제품 썸네일(대표) 사진(base64) - jpg, jpeg, webp, png, gif, svg
  photoBase64?: string // 제품 상세 사진(base64) - jpg, jpeg, webp, png, gif, svg
  isSoldOut?: boolean // 제품 매진 여부
  discountRate?: number // 제품 할인율
}
