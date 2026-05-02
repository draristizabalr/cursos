import zoneinfo
from http import HTTPStatus

from fastapi import HTTPException

from ..constants.time_zone import TIME_ZONE


def get_zone_info(iso_code: str):
    iso = iso_code.upper()

    if iso not in TIME_ZONE.keys():
        raise HTTPException(
            status_code=HTTPStatus.NOT_FOUND, detail="Código de zona horaria invalida"
        )

    timezone_str = TIME_ZONE.get(iso)
    return zoneinfo.ZoneInfo(timezone_str or "CO")
