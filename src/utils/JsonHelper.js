/*****************************************************************************
@author Rick Kock
******************************************************************************/

//=============================================================================

export const resolveJsonPropertyByString = (str, obj, separator = ".") => {
  var properties = Array.isArray(str) ? str : str.split(separator)
  return properties.reduce((prev, curr) => prev && prev[curr], obj)
}

//=============================================================================
